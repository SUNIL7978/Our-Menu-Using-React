const MenuItem = ({ title, price, desc, img }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
          <p className="item-text">{desc}</p>
        </header>
      </div>
    </article>
  );
};

export default MenuItem;
