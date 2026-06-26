export default function GroupNode({ data }) {
  return (
    <div className="group-container">
      <div className="group-title">{data.label}</div>
    </div>
  );
}
