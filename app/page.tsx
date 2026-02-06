import Navigation from '@/widgets/layout/ui/Navigation';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        {/* Hero Banner */}
        <div className='flex flex-col items-center'>
          <h1>안녕하십니까. 저는 프론트엔드 <strong className='text-blue-500'>강지수</strong> 입니다.</h1>
          <p>
            저는 프론트엔드 개발자로, 웹 애플리케이션을 개발하고 디자인을
            구현하는 것을 좋아합니다.
          </p>
          <p>Explore Journey</p>
          <ChevronRight className='rotate-90'/>
        </div>
      </main>
    </div>
  );
}
