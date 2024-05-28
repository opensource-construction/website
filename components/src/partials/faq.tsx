import { getPosts } from "../utils";

import { Card } from "../card";

export function FAQPartial() {
  const faqs = getPosts("faqs");
  console.log(faqs);

  return (
    <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
      {!faqs.length
        ? ""
        : faqs.map((e) => (
            <Card
              color="gray-500"
              type="faq"
              title={e.metadata.title}
              key={e.slug}
            />
          ))}
    </div>
  );
}
