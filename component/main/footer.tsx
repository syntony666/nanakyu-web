export default function FooterComponent() {
  return (
    <>
      <div className="ts-space is-large" />
      <div className="ts-meta is-secondary is-center-aligned">
        <a className="item">Made by 時雨櫻</a>
        <a className="item">© {new Date().getFullYear()} 奶加</a>
      </div>
    </>
  );
}
