import '../css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <SidebarProvider>
                <div className="app-layout">
                    <AppSidebar />
                    <main className="content">
                        <App {...props} />
                    </main>
                </div>
            </SidebarProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
