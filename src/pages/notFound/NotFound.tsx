import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundText,
  NotFoundTitle,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>
        Sorry, the page you were looking for could not be found.
      </NotFoundText>
      <NotFoundText>
        It seems you either entered a wrong URL or stumbled upon a page that no
        longer exists.
      </NotFoundText>
      <NotFoundLink to="/">Return to Main Page</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
