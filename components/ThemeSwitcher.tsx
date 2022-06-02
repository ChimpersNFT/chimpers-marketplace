import { useTheme } from 'next-themes'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <ToggleGroup.Root
            type="single"
            defaultValue="grid"
            aria-label="Change view"
            className="border flex divide-x-[1px] divide-[#D1D5DB] overflow-hidden rounded-[8px] border-[1px] border-[#D1D5DB] dark:divide-neutral-600 dark:border-neutral-600"
        >
            <ToggleGroup.Item
                onClick={() => setTheme('light')}
                value="grid"
                // disabled={!!router.query?.view && !router.query?.view}
                className="block select-none p-3 transition"
                aria-label="Light Mode"
            >
                <div className='sun dark:sun-dark'></div>
            </ToggleGroup.Item>
            <ToggleGroup.Item
                onClick={() => setTheme('dark')}
                value="table"
                // disabled={
                //     !!router.query?.view && router.query?.view.toString() === 'table'
                // }
                className="block select-none p-3 transition"
                aria-label="Dark Mode"
            >
                <div className='moon dark:moon-dark'></div>
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}

export default ThemeSwitcher;