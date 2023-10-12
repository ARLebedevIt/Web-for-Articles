import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import cls from './AdminPanelPage.module.scss'

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
  const { className } = props
  const { t } = useTranslation('navbar')

  return (
    <Page data-testid="AdminPanelPage" className={classNames(cls.AdminPanelPage, {}, [className])}>
      {t('Админка')}
    </Page>
  )
}

export default memo(AdminPanelPage)
