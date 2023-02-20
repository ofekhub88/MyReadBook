const BookDetails = ({ hanldeDetailClick, BookDetails }) => {
        return (
          <div className="modal display-block">
            <section className="modal-main">
            <h3>  {BookDetails.title} </h3>
                  {BookDetails.details}
               <button className="button1" onClick={(event) =>  hanldeDetailClick("hide")}> Close </button>
            </section>
          </div>
        );
      };    
export default BookDetails;