export default ({ href, children }) => (
  <a className="link" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);
