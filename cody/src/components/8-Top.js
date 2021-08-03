const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <section className="goTop">
          <i className="goTop__text fas fa-chevron-up"></i>
        </section>
      </div>
    </>
  );
};
export default GoTop;
