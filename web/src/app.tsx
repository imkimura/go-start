import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { Toaster } from 'sonner'
import { Room } from './pages/room'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryCLient } from './lib/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom />
  },
  {
    path: '/room/:roomId',
    element: <Room />
  }
]);

export function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router} />
      <Toaster invert richColors/>
    </QueryClientProvider>
  )
}
