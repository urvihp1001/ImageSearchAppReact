import {  View, Image } from 'react-native';
function ImageShow({image})
{
  return(
    <View>
    <Image src={image.urls.small} alt={image.alt_description} />
    </View>
  )
}
export default ImageShow;
