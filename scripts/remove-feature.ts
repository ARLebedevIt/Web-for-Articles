import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph'

const removedFeatureName = process.argv[2] // isAticleEnabled
const featureState = process.argv[3] // off / on

const toggleFunctionName = 'toggleFeatures'
const toggleComponentName = 'ToggleFeatures'

if (!removedFeatureName) {
  throw new Error('Укажите название Feature-Flag')
}

if (!featureState) {
  throw new Error('Укажите состояние Feature-Flag. (On/Off)')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное значение состояния Feature-Flag. (On/Off)')
}

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFn(node: Node) {
  let isToggleFeatures = false
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeatures = true
    }
  })
  return isToggleFeatures
}

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

  return identifier?.getText() === toggleComponentName
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  )
  if (!objectOptions) return

  const onFnProperty = objectOptions.getProperty('on')
  const offFnProperty = objectOptions.getProperty('off')
  const featureNameProperty = objectOptions.getProperty('name')

  const onFn = onFnProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
  const offFn = offFnProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  )
  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1)

  // eslint-disable-next-line no-useless-return
  if (featureName !== removedFeatureName) return

  if (featureState === 'on') {
    node.replaceWithText(onFn?.getBody().getText() ?? '')
  }

  if (featureState === 'off') {
    node.replaceWithText(offFn?.getBody().getText() ?? '')
  }
}

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find(node => node.getNameNode().getText() === name)
}

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText()

  if (value?.startsWith('(')) {
    return value.slice(1, -1)
  }

  return value
}

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

  const onAttribute = getAttributeNodeByName(attributes, 'on')
  const offAttribute = getAttributeNodeByName(attributes, 'off')
  
  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature')
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1)

  if (featureName !== removedFeatureName) return

  const offValue = getReplacedComponent(offAttribute)
  const onValue = getReplacedComponent(onAttribute)

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue)
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue)
  }
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFn(node)) {
      return replaceToggleFunction(node)
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      return replaceComponent(node)
    }

  })
})

project.save()
