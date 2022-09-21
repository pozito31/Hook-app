import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

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
