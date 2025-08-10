import { ref, onMounted, watch, Static } from 'vue';

    
    
export function useDarkMode() {
    const isDark = ref(false);
    onMounted(() => {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
        updateTheme();
    });
    
    function toggleDarkMode() {
        
        isDark.value = !isDark.value;
        updateTheme();
    }
    
    function updateTheme() {
        if (isDark.value) {
                    
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } 
        else {
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark');
        }
    }
    
    return { isDark, toggleDarkMode };
}