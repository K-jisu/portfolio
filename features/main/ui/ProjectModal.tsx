'use client';

type ProjectModalProps = {
  isOpen?: boolean;
};

const ProjectModal = ({ isOpen = true }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-8">
      <div className="w-full max-w-3xl rounded-2xl border border-[#224249] bg-[#101f22] text-white shadow-2xl">
        <header className="flex items-start justify-between gap-6 border-b border-[#224249] px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0dccf2]">
              프로젝트 요약
            </p>
            <h3 className="mt-2 text-2xl font-bold">Nexus AI Dashboard</h3>
            <p className="mt-2 text-sm text-slate-400">2023.06 ~ 2023.10</p>
          </div>
          <button
            className="flex size-10 items-center justify-center rounded-lg border border-transparent bg-[#224249] text-white transition hover:border-[#0dccf2]/40 hover:bg-[#0dccf2]/20"
            aria-label="모달 닫기"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </header>
        <div className="space-y-6 px-6 py-6">
          <p className="text-base leading-relaxed text-slate-300">
            실시간 데이터 스트림을 대시보드로 시각화하는 플랫폼을 구축했습니다.
            대용량 지표를 빠르게 탐색하도록 정보 구조를 정리하고, 운영 흐름을
            단순화했습니다.
          </p>
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-[#0dccf2]">
              핵심 포인트
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>실시간 웹소켓 업데이트 200ms 내 반영</li>
              <li>렌더링 최적화로 대시보드 FPS 안정화</li>
              <li>권한별 뷰 분리로 운영 편의성 향상</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React 18', 'TypeScript', 'D3.js', 'Node.js', 'Redis'].map(
              (stack) => (
                <span
                  key={stack}
                  className="rounded-full border border-[#0dccf2]/30 bg-[#0dccf2]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0dccf2]"
                >
                  {stack}
                </span>
              )
            )}
          </div>
          <div className="rounded-xl border border-[#224249] bg-[#0d1a1d] px-4 py-4 text-sm text-slate-300">
            <p>
              <span className="font-bold text-white">역할:</span> 프론트엔드 리드
            </p>
            <p className="mt-2">
              <span className="font-bold text-white">성과:</span> CPU 오버헤드 40%
              감소, 운영 지표 탐색 시간 30% 단축
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
