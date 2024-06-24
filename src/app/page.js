import { Button } from "@/components/RemoteComponents";
import { preFetchData } from '@/services/queries';
import {
  QueryClient
} from '@tanstack/react-query';
const  Home = () => {
  const queryClient = new QueryClient();
  preFetchData(queryClient, '/products', 'products');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button>Button</Button>
      
    </main>
  );
}

export default Home;
