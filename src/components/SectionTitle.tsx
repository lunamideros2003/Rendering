interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-selva-900">{title}</h2>
      {subtitle && <p className="mt-2 text-tierra-700">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-arena-300" />
    </div>
  );
}
