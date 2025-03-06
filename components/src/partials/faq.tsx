import { CustomMDX } from "../mdx";
import { Card } from "../card";
import { loadFaqs } from "@/lib/mdxParser/mdxParser";

export function FAQPartial() {
  const faqs = loadFaqs();

  return (
    <div>
      <div className="grid gap-12 py-10 md:mt-16 lg:grid-cols-2 lg:gap-32">
        {!faqs.length
          ? ""
          : faqs.map((e) => (
              <Card key={e.slug} color="slate-300" type="faq" title={e.title}>
                {<CustomMDX source={e.content} />}
              </Card>
            ))}
      </div>
    </div>
  );
}
