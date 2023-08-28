import { ThreeCircles } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'components/redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    isLoading && (
      <StyledLoader
        style={{
          display: isLoading ? 'flex' : 'none',
        }}
      >
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </StyledLoader>
    )
  );
};