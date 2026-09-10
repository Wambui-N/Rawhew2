/** Renders a schema.org object as a `<script type="application/ld+json">` tag. */
export function JsonLd({ data }: { data: object }) {
  // Escape "<" so a stray "</script>" inside a string value can't break out of the tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
