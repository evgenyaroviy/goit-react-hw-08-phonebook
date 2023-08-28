import { ColorRing } from 'react-loader-spinner';
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
        <ColorRing
  visible={true}
  height="150"
  width="150"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
      </StyledLoader>
    )
  );
};