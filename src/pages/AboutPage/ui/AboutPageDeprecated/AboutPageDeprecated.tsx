import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

export const AboutPageDeprecated = memo(() => {
  const { t } = useTranslation('about')
  return (
    <VStack gap="32">
      <CardDeprecated max>
        <TextDeprecated
          title={t('О сайте')}
          text={t(
            'Здесь вы можете прочитать статьи на различные темы, а так же опубликовать собственную',
          )}
        />
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('Архитектура проекта')}
          text={t(
            'Проект написан в соответствии с методологией Feature sliced design',
          )}
        />
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('Работа с переводами')}
          text={t(
            'В проекте используется библиотека i18next для работы с переводами',
          )}
        />
      </CardDeprecated>
      <CardDeprecated max>
        <VStack gap="16">
          <TextDeprecated
            title={t('Тесты')}
            text={t('В проекте используются 4 вида тестов:')}
          />
          <TextDeprecated text={`1) ${t('Обычные unit тесты на jest')}`} />
          <TextDeprecated
            text={`2) ${t('Тесты на компоненты с React testing library')}`}
          />
          <TextDeprecated text={`3) ${t('Скриншотное тестирование с loki')}`} />
          <TextDeprecated text={`4) ${t('e2e тестирование с Cypress')}`} />
        </VStack>
      </CardDeprecated>
      <CardDeprecated max>
        <VStack gap="16">
          <TextDeprecated
            title={t('Линтинг')}
            text={t(
              'В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями',
            )}
          />
          <TextDeprecated
            text={t(
              // eslint-disable-next-line max-len
              `Также для строгого контроля главных архитектурных принципов используется собственный eslint plugin *eslint-plugin-my-fsd-helper*, который содержит 3 правила`,
            )}
          />
          <TextDeprecated
            text={`1)${t(
              `path-checker - запрещает использовать абсолютные импорты в рамках одного модуля`,
            )}`}
          />
          <TextDeprecated
            text={`2) ${t(
              // eslint-disable-next-line max-len
              `layer-imports - проверяет корректность использования слоев с точки зрения FSD (например widgets нельзя использовать в features и entitites)`,
            )}`}
          />
          <TextDeprecated
            text={`3) ${t(
              `public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix`,
            )}`}
          />
        </VStack>
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('Storybook')}
          text={t(
            `В проекте для каждого компонента описываются стори-кейсы. Запросы на сервер мокаются с помощью msw-storybook-addon`,
          )}
        />
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('Конфигурация проекта')}
          text={t(`Для разработки проект содержит 2 конфига:`)}
        />
        <TextDeprecated text={`1) ${t('Webpack')}`} />
        <TextDeprecated text={`2) ${t('Vite')}`} />
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('CI pipeline')}
          text={t(
            `В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг`,
          )}
        />
      </CardDeprecated>
      <CardDeprecated max>
        <VStack gap="16">
          <TextDeprecated
            title={t('Работа с данными')}
            text={t(
              `Взаимодействие с данными осуществляется с помощью Redux Toolkit`,
            )}
          />
          <TextDeprecated
            text={t(
              `По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter`,
            )}
          />
          <TextDeprecated
            text={t(`Запросы на сервер отправляются с помощью RTK Query`)}
          />
          <TextDeprecated
            text={t(
              // eslint-disable-next-line max-len
              `Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется кастомный DynamicModuleLoader`,
            )}
          />
        </VStack>
      </CardDeprecated>
      <CardDeprecated max>
        <TextDeprecated
          title={t('Работа с Feature-Flag')}
          text={t(
            `Взаимодесйтвие с Feature Flags осуществляется с помощью хелпера toggleFeatures`,
          )}
        />
      </CardDeprecated>
    </VStack>
  )
})
