import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";


export const Layout = () => {

    const {counter, increment } = useCounter(1);
    const {data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

  return (
      <>
          <h1>BreakingBad Quotes</h1>
          <hr />
          {
            isLoading
            ? <LoadingQuote />
            : <Quote author={author} quote={quote} />
          }
          
          <button
            className="btn btn-primary"
            disabled={isLoading}
            onClick={() => increment()}>
              Next quote
          </button>

      </>
  )
}