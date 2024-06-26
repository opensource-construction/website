import Image from "next/image";

import { Button } from "./button";

/**
 * Represents the props for the TrainingCard component.
 */
interface TrainingCardProps {
  title: string;
  slug?: string;
  color?: string;
  subtitle?: string;
  author: string;
  image?: string;
}

/**
 * Renders a training card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the training.
 * @param {string} props.slug - The slug of the training.
 * @param {string} [props.color="slate-300"] - The background color of the card.
 * @param {string} props.subtitle - The subtitle of the training.
 * @param {string} props.author - The author of the training.
 * @param {string} props.image - The image URL of the training.
 * @returns {JSX.Element} The rendered training card component.
 */
export function TrainingCard({
  title,
  slug,
  color = "slate-300",
  subtitle,
  author,
  image,
}: TrainingCardProps): JSX.Element {
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
