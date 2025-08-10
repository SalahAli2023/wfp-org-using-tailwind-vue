import { ref, onMounted, watch, Static } from 'vue';

    
    
export function useDarkMode() {
    let isDark = ref(false);
    onMounted(() => {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        isDark.value = savedTheme //? savedTheme === 'theme' : systemPrefersDark;
        // updateTheme();
    });
    
    function toggleDarkMode() {
        // document.documentElement.classList.toggle('dark',isDark.value);
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