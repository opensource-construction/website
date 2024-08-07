import { Button } from "./button";
import Image from "next/image";

interface TrainingCardProps {
  title: string;
  slug?: string;
  color?: string;
  subtitle?: string;
  author: string;
  image?: string;
}

export function TrainingCard({
  title,
  slug,
  color = "slate-300",
  subtitle,
  author,
  image,
}: TrainingCardProps) {
  return (
    <div className={`bg-${color}`}>
      <div className="mb-8 flex flex-col p-5 md:flex-row">
        <div className="mr-4">
          <h4 className="mb-2 mt-0 text-xl font-bold">{title}</h4>
          <div className="mb-4">{subtitle}</div>
          <div className="mb-12">Taught by: {author}</div>
          {slug ? (
            <Button
              label="More about the training"
              target={`/trainings/${slug}`}
              type="primary"
            />
          ) : null}
        </div>
        {image ? (
          <Image
            alt={title}
            src={image}
            width={300}
            height={300}
            className="mt-8 md:mt-0"
          />
        ) : null}
      </div>
    </div>
  );
}
