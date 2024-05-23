import { useTranslation } from 'react-i18next'
import { useTheme } from '../ThemeContext'
import cn from 'classnames'

export function Logo() {
  const { isDarkTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <h1 className={cn('sidebar-logo', { dark: isDarkTheme })}>
      <svg viewBox="450 900 3200 1730" xmlSpace="preserve">
        <circle cx="930.32" cy="2390.95" r="121.59" />
        <circle cx="2412.32" cy="2390.95" r="121.59" />
        <path
          className="st0"
          d="M1045.09,1438.27c-13.54-0.66-38.89,0.15-64.89,14.43c-55.66,30.56-63.97,95.18-64.8,102.6
		c-17.1,135-34.2,270-51.3,405"
        />
        <path className="st0" d="M1045.09,1438.27c560.61,0,1121.21,0,1681.82,0" />
        <path
          id="front2"
          className="st0"
          d="M827.65,2390.95c-51.75,1.35-103.5,2.7-155.25,4.05c-8.57,0.42-23.68-0.24-35.47-10.13
		c-13.73-11.52-15.74-29.53-16.73-40.27c-5.6-60.65-3.08-155.78-2.7-169.2c0.45-9.69,2.48-26.52,11.7-45
		c9.74-19.54,22.9-31.67,30.6-37.8c68.1-44.1,136.2-88.2,204.3-132.3"
        />
        <path className="st0" d="M1051.91,2390.95c467.05,0.45,934.09,0.9,1401.14,1.35" />
        <path className="st0" d="M910,1600.3c460.8,0.3,921.6,0.6,1382.4,0.9" />
        <path className="st0" d="M1486.6,1600.68c0.4,263.77,0.8,527.55,1.2,791.32" />
        <path className="st0" d="M1190.52,1605.89c0.4,263.77,0.8,527.55,1.2,791.32" />
        <path className="st0" d="M854.8,1960.6c115.6-0.2,231.2-0.4,346.8-0.6" />
        <path className="st0" d="M1648,1959.6c574.35,0.23,1148.7,0.47,1723.05,0.7" />
        <path className="st0" d="M1659,1959.6c-0.07,144.93-0.13,289.87-0.2,434.8" />
        <path className="st0" d="M2581.3,1959.98c57.6,90.11,115.2,180.21,172.8,270.32" />
        <path className="st0" d="M2744.43,2225.35c137.1-0.23,274.2-0.45,411.3-0.68" />
        <path className="st0" d="M2292.4,1612c0-136.8,0-273.6,0-410.4" />
        <path className="st0" d="M2281.4,1212.4c255-0.6,510-1.2,765-1.8" />
        <circle className="st0" cx="3112.2" cy="1212.4" r="65.8" />
        <circle className="st0" cx="2792.71" cy="1438.12" r="65.8" />
        <circle className="st0" cx="3442.6" cy="1960.6" r="65.8" />
        <circle className="st0" cx="3223.9" cy="2225.35" r="65.8" />
      </svg>
      <span>{t('website_name')}</span>
    </h1>
  )
}
