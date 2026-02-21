import { Badge } from '@/shared/ui/badge';
import { Card, CardHeader } from '@/shared/ui/card';
import Image from 'next/image';
import { transformedSkilltoIcon } from '../model/transformSkillToIcon';

type ProjectCardProps = {
  title: string;
  skills: string[];
  description: string;
  thumbnail: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="rounded-xl overflow-hidden group bg-[rgba(34,66,73,0.2)] backdrop-blur-[12px] border border-[rgba(13,204,242,0.1)] hover:border-[rgba(13,204,242,0.4)] hover:shadow-[0_0_20px_rgba(13,204,242,0.1)] transition cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <Image
          alt={props.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={225}
          src={`/projects/${props.thumbnail}.png`}
        />
      </div>
      <CardHeader className="p-6 space-y-3">
        <div className="flex gap-2">
          {props.skills.map((skill, index) => (
            <Badge
              key={index}
              className="text-[10px] px-2 py-1 rounded bg-white/5 text-[#0dccf2] border border-[#0dccf2]/20"
            >
              <Image
                alt={skill}
                src={`/${transformedSkilltoIcon(skill)}.png`}
                width={20}
                height={20}
                className="rounded-sm"
              />
            </Badge>
          ))}
        </div>
        <h4 className="text-xl font-bold text-slate-100">{props.title}</h4>
        <p className="text-sm text-slate-400">{props.description}</p>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
