import PropTypes from "prop-types";

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

BookDetails.propTypes = {
        books: PropTypes.array.isRequired,
        MoveToShelve: PropTypes.func.isRequired,
      };

      
export default BookDetails;