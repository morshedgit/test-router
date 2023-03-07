/**
 * A component that displays the introductory content for the Nutrition App,
 * including a title, description, and an image.
 * @component
 * @return {JSX.Element} Returns the IntroContent component.
 * @example
 * <IntroContent />
 */
const IntroContent = () => {
  return (
    <article className="w-full grid grid-cols-1 sm:grid-cols-2 items-center px-12">
      <section>
        <h1 className="capitalize text-2xl font-semibold tracking-wide mb-12">
          Find Out Everything About Your Meal
        </h1>
        <div className="text-2xl font-light">
          <p>
            Search for <span className="text-orange-500">Ingredients,</span>
          </p>
          <p>
            See The <span className="text-green-600">nutrition,</span>
          </p>
          <p>
            <span className="text-orange-500">Enjoy</span> Your Meal...
          </p>
        </div>
      </section>
      <section>
        <img src="/test-router/selectIngredient.png" alt="select food" />
      </section>
    </article>
  );
};

export default IntroContent;
