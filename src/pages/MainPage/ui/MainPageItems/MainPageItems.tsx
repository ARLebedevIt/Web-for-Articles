import React, { memo, useMemo } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import GitHubIcon from '@/shared/assets/icons/redesigned/github.svg'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import MailIcon from '@/shared/assets/icons/redesigned/mail.svg'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'

export const MainPageItems = memo(() => {
  const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
  })

  const data = useMemo(() => {
    return [
      {
        Svg: GitHubIcon,
        content: 'GitHub',
        link: 'https://github.com/ARLebedevIt',
      },
      {
        Svg: MailIcon,
        content: 'Mail',
        link: 'mailto:arlebedevit@gmail.com',
      },
    ]
  }, [])

  const linkItems = useMemo(() => {
    return data.map((item) => {
      return (
        <HStack key={item.link} gap="24" justify="center" max>
          <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <>
            <Text text={item.content} />
            <AppLink target="_blank" to={item.link}>
              <Icon width={30} height={30} hovered Svg={item.Svg} />
            </AppLink>
            </>
          }
          off={
            <>
            <TextDeprecated size={TextSize.L} text={item.content} />
            <AppLinkDeprecated target="_blank" to={item.link}>
              <IconDeprecated width={30} height={30} Svg={item.Svg} />
            </AppLinkDeprecated>
            </>
          }
          />
        </HStack>
      )
    })
  }, [data])
  return (
    <Card paddings="24" border="partial" max>
      <VStack gap="24">{linkItems}</VStack>
    </Card>
  )
})
