import { ref, onMounted, watch } from 'vue';

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
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
    }
    
    return { isDark, toggleDarkMode };
}