import { DropdownDirection } from '@/shared/types/ui'
import cls from './popup.module.scss'

export const mapDirection: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
}
