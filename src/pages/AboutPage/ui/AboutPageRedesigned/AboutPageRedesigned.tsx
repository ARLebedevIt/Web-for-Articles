import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

export const AboutPageRedesigned = memo(() => {
  const { t } = useTranslation('about')
  return (
    <VStack gap="32">
      <Card border="partial" paddings="16" max>
        <Text
          title={t('О сайте')}
          text={t(
            'Здесь вы можете прочитать статьи на различные темы, а так же редактировать их',
          )}
        />
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('Архитектура проекта')}
          text={t(
            'Проект написан в соответствии с методологией Feature sliced design',
          )}
        />
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('Работа с переводами')}
          text={t(
            'В проекте используется библиотека i18next для работы с переводами',
          )}
        />
      </Card>
      <Card border="partial" paddings="16" max>
        <VStack gap="16">
          <Text
            title={t('Тесты')}
            text={t('В проекте используются 4 вида тестов:')}
          />
          <Text text={`1) ${ t('Обычные unit тесты на jest')}`} />
          <Text text={`2) ${t('Тесты на компоненты с React testing library')}`} />
          <Text text={`3) ${t('Скриншотное тестирование с loki')}`} />
          <Text text={`4) ${t('e2e тестирование с Cypress')}`} />
        </VStack>
      </Card>
      <Card border="partial" paddings="16" max>
        <VStack gap="16">
          <Text
            title={t('Линтинг')}
            text={t(
              'В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями',
            )}
          />
          <Text
            text={t(
              // eslint-disable-next-line max-len
              `Также для строгого контроля главных архитектурных принципов используется собственный eslint plugin *eslint-plugin-my-fsd-helper*, который содержит 3 правила`
            )}
          />
          <Text
            text={`1)${t(
              `path-checker - запрещает использовать абсолютные импорты в рамках одного модуля`,
            )}`}
          />
          <Text
            text={`2) ${t(
              // eslint-disable-next-line max-len
              `layer-imports - проверяет корректность использования слоев с точки зрения FSD (например widgets нельзя использовать в features и entitites)`,
            )}`}
          />
          <Text
            text={`3) ${ t(
              `public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix`,
            )}`}
          />
        </VStack>
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('Storybook')}
          text={t(
            `В проекте для каждого компонента описываются стори-кейсы. Запросы на сервер мокаются с помощью msw-storybook-addon`,
          )}
        />
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('Конфигурация проекта')}
          text={t(
            `Для разработки проект содержит 2 конфига:`,
          )}
        />
        <Text text={`1) ${ t('Webpack')}`} />
        <Text text={`2) ${t('Vite')}`} />
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('CI pipeline')}
          text={t(
            `В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг`,
          )}
        />
      </Card>
      <Card border="partial" paddings="16" max>
        <VStack gap="16">
          <Text
            title={t('Работа с данными')}
            text={t(
              `Взаимодействие с данными осуществляется с помощью Redux Toolkit`,
            )}
          />
          <Text
            text={t(
              `По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter`,
            )}
          />
          <Text
            text={t(`Запросы на сервер отправляются с помощью RTK Query`)}
          />
          <Text
            text={t(
              // eslint-disable-next-line max-len
              `Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется кастомный DynamicModuleLoader`,
            )}
          />
        </VStack>
      </Card>
      <Card border="partial" paddings="16" max>
        <Text
          title={t('Работа с Feature-Flag')}
          text={t(
            `Взаимодесйтвие с Feature Flags осуществляется с помощью хелпера toggleFeatures`,
          )}
        />
      </Card>
    </VStack>
  )
})