import { useEffect, useRef, useState } from "react"


export default function UploadWidget() {
  const CloudinaryRef = useRef();
  const WidgetRef = useRef();
  const [imgSrc, SetImgSrc] = useState();

  function CreateCloudiaryRef() {
    CloudinaryRef.current = window.cloudinary;
    WidgetRef.current = CloudinaryRef.current.createUploadWidget({
      cloudName: 'shaykos',
      uploadPreset: 'ruppin'
    }, HandleWidget)
  }

  function HandleWidget(err, res) {
    if (err) {
      console.error(err);
      return;
    }
    if (res.event == "success" && res.info?.url) {
      SetImgSrc(res.info.url)
      console.log('res.info.url', res.info.url);
      WidgetRef.current.close();
    }
  }

  useEffect(() => {
    if (!CloudinaryRef.current) {
      console.count('ref')
      CreateCloudiaryRef();
    }
  }, [])

  return (
    <>
      <button onClick={() => WidgetRef.current.open()}>Upload</button><br/>
      {imgSrc && <img src={imgSrc} style={{width:"100px", aspectRatio:1}}/> }
    </>
  )

}