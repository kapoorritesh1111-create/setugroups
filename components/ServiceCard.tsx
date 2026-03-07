interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
}

export function ServiceCard({ title, description, points }: ServiceCardProps) {
  return (
    <article className="service-card glass-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="list">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
