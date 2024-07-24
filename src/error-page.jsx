import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-10 pb-20">
      <h1 className="text-6xl my-2 font-bold">Oops!</h1>
      <p className="text-2xl my-4">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-xl italic my-4  text-gray-500">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
