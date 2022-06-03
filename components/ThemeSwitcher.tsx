import { useTheme } from 'next-themes'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <ToggleGroup.Root
            type="single"
            defaultValue="light"
            aria-label="Change theme"
            className="border flex divide-x-[1px] divide-[#D1D5DB] overflow-hidden rounded-[8px] border-[1px] border-[#D1D5DB] dark:divide-neutral-600 dark:border-neutral-600 md:none"
        >
            <ToggleGroup.Item
                onClick={() => setTheme('light')}
                value="light"
                disabled={theme == "light"}
                className={`block select-none p-3 transition flex-auto ${
                    theme == "light"
                      ? 'cursor-not-allowed bg-[#F1E5FF] dark:bg-primary-900'
                      : 'hover:bg-[#F1E5FF] dark:hover:bg-primary-900'
                  }`}
                aria-label="Light Mode"
            >
                <div className='sun dark:sun-dark mx-auto'></div>
            </ToggleGroup.Item>
            <ToggleGroup.Item
                onClick={() => setTheme('dark')}
                value="dark"
                disabled={theme == "dark"}
                className={`block select-none p-3 transition flex-auto ${
                    theme == "dark"
                      ? 'cursor-not-allowed bg-[#F1E5FF] dark:bg-primary-900'
                      : 'hover:bg-[#F1E5FF] dark:hover:bg-primary-900'
                  }`}
                aria-label="Dark Mode"
            >
                <div className='moon dark:moon-dark mx-auto'></div>
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}

export default ThemeSwitcher;