
<template>
    <div class="flex h-screen overflow-hidden bg-gray-100">
        <!-- Sidebar -->
        <MobileSidebar :mobile-open ="mobileSidebarOpen"  @close="mobileSidebarOpen = false"/>
        <Sidebar/>        
        <!-- Main Content -->
        <div class="flex flex-col flex-1 overflow-hidden">
            <!-- Top Navigation -->
            <TopNav @openMobileSidebar="mobileSidebarOpen=!mobileSidebarOpen" />
            <!-- <TopNav @toggle-sidebar="mobileSidebarOpen =!mobileSidebarOpen" /> -->
            
            <!-- Main Content Area -->
            <main class="flex-1 overflow-auto p-4 bg-bg-color">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <DashboardCard 
                    v-for="stat in stats"
                    :key="stat.title"
                    :title="stat.title"
                    :value="stat.value"
                    :icon="stat.icon"
                    :trend="stat.trend"
                    :trend-direction="stat.trendDirection"
                    :color="stat.color"
                />
                </div>

                <!-- Recent Activities and Quick Actions -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <RecentActivities class="lg:col-span-2" :activities="activities" />
                <QuickActions :actions="quickActions" />
                </div>

                <!-- Projects Overview -->
                <DashboardTable :projects="projects" />
            </main>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Sidebar from '@/components/dashboard/Sidebar.vue';
    import TopNav from '@/components/dashboard/TopNav.vue';
    import DashboardCard from '@/components/dashboard/DashboardCard.vue';
    import RecentActivities from '@/components/dashboard/RecentActivities.vue';
    import QuickActions from '@/components/dashboard/QuickAction.vue';
    import DashboardTable from '@/components/dashboard/DashboardTable.vue';
    import MobileSidebar from '@/components/dashboard/MobileSidebar.vue';

    const mobileSidebarOpen = ref(false);
    const visibled = ref(false);

    // Sample data - would typically come from API in real app
    const stats = ref([
    {
        title: 'Total Beneficiaries',
        value: '15,842',
        icon: 'users',
        trend: '12.5%',
        trendDirection: 'up',
        color: 'blue'
    },
    {
        title: 'Active Projects',
        value: '24',
        icon: 'project-diagram',
        trend: '3 new',
        trendDirection: 'up',
        color: 'orange'
    },
    {
        title: 'Total Donations',
        value: '$2.4M',
        icon: 'donate',
        trend: '8.2%',
        trendDirection: 'up',
        color: 'green'
    },
    {
        title: 'Volunteers',
        value: '342',
        icon: 'hands-helping',
        trend: '2.3%',
        trendDirection: 'down',
        color: 'purple'
    }
    ]);

    const activities = ref([
    {
        title: 'New donation received',
        description: '$5,000 from John Doe for Food Security Project',
        time: '2 hours ago',
        icon: 'donate',
        color: 'blue'
    },
    {
        title: 'New volunteer registered',
        description: 'Sarah Johnson joined the Education Program',
        time: '5 hours ago',
        icon: 'user-plus',
        color: 'green'
    },
    {
        title: 'Project milestone reached',
        description: "Women's Empowerment Project helped 500 women this month",
        time: '1 day ago',
        icon: 'project-diagram',
        color: 'orange'
    },
    {
        title: 'Event completed',
        description: 'Fundraising Gala raised $250,000',
        time: '2 days ago',
        icon: 'calendar-check',
        color: 'purple'
    }
    ]);

    const quickActions = ref([
    { title: 'Add Project', icon: 'plus', color: 'blue' },
    { title: 'Add Beneficiary', icon: 'user-plus', color: 'green' },
    { title: 'Create Report', icon: 'file-invoice-dollar', color: 'orange' },
    { title: 'Send Newsletter', icon: 'envelope', color: 'purple' }
    ]);

    const projects = ref([
    {
        name: 'Food Security',
        category: 'Emergency Relief',
        image: 'proj1.jpg',
        status: 'Active',
        beneficiaries: '8,742',
        budget: '$1.2M',
        progress: 75
    },
    {
        name: "Women's Empowerment",
        category: 'Development',
        image: 'proj2.jpg',
        status: 'Active',
        beneficiaries: '2,150',
        budget: '$450K',
        progress: 40
    },
    {
        name: 'School Feeding',
        category: 'Education',
        image: 'proj3.jpg',
        status: 'Planning',
        beneficiaries: '-',
        budget: '$300K',
        progress: 15
    }
    ]);

</script>