import React from 'react'
type Props = {
  width?: number
  height?: number
}
function ColoredLogo({ width = 152, height = 163 }: Props) {
  return (
    <svg width={width} height={height} viewBox='0 0 152 163' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M78.7783 52.8529C79.4972 52.7103 80.002 52.5844 80.5136 52.5155C81.6517 52.3657 82.4157 52.8957 82.4676 54.084C82.5532 55.9804 82.56 57.8911 82.4292 59.7804C82.3909 60.3484 81.8996 61.0923 81.4151 61.3775C79.0239 62.782 78.4109 64.783 79.0915 67.4994C79.4025 68.7399 79.3484 70.0803 79.4769 71.5775C80.1147 71.3897 80.6398 71.2519 81.1559 71.0831C83.022 70.4795 84.8768 69.8331 86.7518 69.2651C88.2956 68.7969 89.1385 69.5051 89.1565 71.2043C89.1678 72.2334 89.1024 73.2695 89.1656 74.2938C89.3413 77.11 88.1784 78.9565 85.7129 80.0164C84.2209 80.6581 82.8101 81.5113 81.3182 82.1529C80.2612 82.6092 79.8555 83.2865 79.8735 84.4962C79.9321 88.1394 79.9276 91.7873 79.8803 95.4305C79.8443 98.1896 79.0983 100.742 77.5477 102.99C75.7515 105.59 72.389 105.588 70.5432 103.023C68.8913 100.73 68.1183 98.1183 68.0822 95.276C68.0349 91.552 68.0439 87.828 68.0912 84.1041C68.1025 83.2224 67.8433 82.7471 67.077 82.3787C65.0622 81.4115 63.0767 80.3753 61.098 79.3296C59.6601 78.5692 58.9592 77.2383 58.8646 75.5961C58.7812 74.175 58.8195 72.7443 58.8398 71.3184C58.8668 69.4029 59.7097 68.766 61.4744 69.3245C63.4508 69.9495 65.4206 70.6007 67.3948 71.2352C67.7103 71.3374 68.0349 71.4064 68.5284 71.5394C68.6817 69.7143 68.6501 67.9462 69.0175 66.2755C69.466 64.234 68.7921 62.9721 67.21 61.9573C65.8916 61.1113 65.2448 59.885 65.4273 58.1668C65.5513 56.9928 65.4296 55.7927 65.4634 54.6044C65.513 52.8696 66.3987 52.1138 67.9785 52.6153C69.0535 52.9551 69.2857 52.6153 69.2834 51.5482C69.2519 41.4861 69.342 31.4215 69.2181 21.3618C69.0941 11.3258 61.1386 3.40484 51.9502 3.57357C40.4924 3.78508 30.0555 11.0691 25.6428 22.2197C22.8054 29.3872 22.695 36.6903 24.7616 44.0765C26.8395 51.4936 30.5942 57.9387 35.2255 63.849C40.5578 70.653 46.654 76.6204 53.3317 81.92C56.6852 84.5817 60.1469 87.0961 63.5613 89.6746C63.683 89.7673 63.8092 89.8552 63.9286 89.9503C64.7625 90.6062 65.0442 91.6637 64.5912 92.4314C64.1134 93.2394 62.9911 93.4509 62.0874 92.8163C60.1199 91.4332 58.1637 90.0334 56.2345 88.5933C48.2136 82.5997 40.7674 75.9051 34.2857 68.0911C29.4651 62.2805 25.3588 55.9519 22.7423 48.6703C19.5308 39.7298 18.8479 30.6729 22.2713 21.6517C25.9448 11.9674 32.5414 5.34645 41.901 1.8815C46.5819 0.149019 51.4071 -0.568687 56.3066 0.507873C62.1978 1.80307 66.6601 5.29892 69.7297 10.791C71.8166 14.5245 72.6099 18.5503 72.5941 22.8376C72.5558 33.2966 72.5716 43.758 72.5648 54.217C72.5648 56.9643 72.1118 57.3326 69.5291 56.7148C69.351 56.672 69.164 56.6815 68.9318 56.6648C68.6839 57.9244 68.7854 58.8679 69.8604 59.7781C73.3987 62.7749 72.6617 61.6769 72.3214 66.2232C72.1389 68.6686 71.7963 71.0998 71.5371 73.5381C71.3456 75.3419 70.5861 75.9265 68.9431 75.4155C66.7548 74.7358 64.5822 73.9967 62.4187 73.2885C61.6727 74.8832 62.0062 75.9479 63.381 76.6466C65.5445 77.7469 67.681 78.9138 69.8761 79.9404C71.021 80.4751 71.3794 81.2736 71.3726 82.5356C71.3478 86.9321 71.3861 91.331 71.4335 95.7276C71.4537 97.5147 71.9969 99.1545 72.9592 100.618C73.6691 101.7 74.4917 101.664 75.1566 100.538C76.1527 98.8503 76.6395 97.0014 76.635 95.0099C76.6282 90.889 76.6778 86.7681 76.6057 82.6496C76.5809 81.2617 77.0384 80.4418 78.2351 79.8834C80.3265 78.9042 82.3639 77.7992 84.4373 76.7725C85.9315 76.031 86.2718 75.185 85.6633 73.2814C83.7454 73.9017 81.8207 74.5243 79.8961 75.147C79.5017 75.2753 79.1141 75.444 78.7129 75.5296C77.4779 75.7934 76.7003 75.2991 76.5448 73.9777C76.1257 70.4439 75.7267 66.9029 75.4608 63.3547C75.4112 62.7107 75.9093 61.9003 76.3623 61.3608C77.0023 60.6003 77.8655 60.0561 78.5687 59.3455C78.8639 59.0461 79.1276 58.5827 79.1749 58.1644C79.3372 56.7433 79.1411 56.5935 77.8272 56.9286C76.3082 57.3136 75.4833 56.6696 75.4811 55.0274C75.4743 43.7746 75.4653 32.5242 75.4856 21.2715C75.5036 11.062 82.9544 1.83872 92.6182 0.329634C98.2299 -0.547298 103.637 0.519755 108.752 2.98657C118.709 7.78475 124.936 15.9219 127.276 27.1557C128.84 34.6679 127.762 42.0279 125.087 49.1574C121.952 57.5085 116.958 64.5359 111.18 71C104.195 78.8139 96.3301 85.5157 87.8516 91.438C87.1643 91.918 86.5062 92.4504 85.7895 92.8781C84.8384 93.4461 83.9392 93.2061 83.4366 92.3363C82.9656 91.5235 83.1797 90.6751 84.0722 89.9954C87.9643 87.0272 91.9466 84.1848 95.7418 81.0859C103.217 74.9782 110.021 68.122 115.583 60.0038C120.172 53.3068 123.58 46.0442 124.443 37.6955C125.376 28.6648 123.066 20.6155 117.332 13.852C111.225 6.6464 103.486 3.10778 94.2747 3.7019C88.4872 4.07502 84.23 7.31658 81.2077 12.4237C79.5603 15.209 78.7647 18.2889 78.7535 21.5661C78.7242 31.431 78.7242 41.2959 78.7152 51.1608C78.7152 51.6647 78.758 52.1685 78.7895 52.8577L78.7783 52.8529Z'
        fill='#F53737'
      />
      <path
        d='M78.0045 123.042C78.0045 120.21 77.9915 117.376 78.0097 114.544C78.0228 112.579 78.714 112.015 81.0591 112.008C82.6216 112.004 84.1894 111.977 85.7493 112.052C91.1203 112.311 94.2427 116.787 91.8063 120.792C91.3446 121.553 91.8063 121.845 92.3045 122.242C94.6444 124.102 95.4974 126.352 94.72 128.975C93.8488 131.918 90.7681 133.935 87.1292 133.983C85.0006 134.011 82.872 133.998 80.7435 133.991C78.8419 133.985 78.0332 133.335 78.0228 131.761C78.0045 128.855 78.0176 125.951 78.0176 123.044H78.0045V123.042ZM82.0045 126.991C82.0045 127.778 82 128 82 129.5C82 130 82 130 82 130.383C83.4269 130.446 86.0779 130.492 87.497 130.383C89.1821 130.254 90.5412 129.018 90.6977 127.653C90.922 125.719 89.4664 124.159 87.1292 123.991C81.3137 123.991 82.0932 123.674 82.0045 126.991ZM82.177 118.032C82.177 119.784 82.177 120.991 85.5045 120.991C89.4321 121.19 89.4672 119.097 89.402 117.677C89.3367 116.256 86.9753 115.18 85.152 115.194C81.5626 115.218 82.177 115.194 82.177 118.032Z'
        fill='#F53737'
      />
      <path
        d='M72.9921 119.774C72.9921 121.485 73.0093 123.198 72.9899 124.909C72.9058 131.907 65.5475 136.244 59.5397 132.787C56.5973 131.094 55.07 128.433 55.0246 124.989C54.9772 121.384 55.0117 117.779 55.0182 114.174C55.0203 112.737 55.592 112.02 56.7159 112C57.8937 111.979 58.5107 112.704 58.515 114.198C58.528 117.764 58.4827 121.33 58.528 124.893C58.5819 128.948 62.6267 131.572 66.2378 129.892C68.3217 128.922 69.4111 127.163 69.4564 124.865C69.5276 121.262 69.4801 117.655 69.4931 114.05C69.4974 112.719 70.0971 112.02 71.2037 112.007C72.3428 111.994 72.9662 112.647 72.9856 113.982C73.0136 115.911 72.9921 117.843 72.9921 119.772V119.774Z'
        fill='#F53737'
      />
      <path
        d='M43.6594 134C36.4712 133.962 31.3422 126.747 33.4962 119.701C35.495 113.166 42.776 110.08 48.7319 113.262C49.3229 113.578 49.8957 113.972 50.3979 114.426C51.13 115.094 51.1845 116.15 50.6157 116.896C50.0913 117.582 49.1212 117.748 48.3447 117.198C46.8885 116.169 45.3556 115.491 43.5525 115.532C40.5413 115.6 37.9153 117.5 36.7918 120.513C35.8096 123.148 36.5579 126.377 38.6171 128.391C40.753 130.483 44.2362 131.065 46.7937 129.743C47.304 129.48 47.784 129.148 48.2741 128.842C49.1313 128.309 50.2406 128.466 50.7145 129.193C51.241 130 51.0131 131.135 50.1599 131.813C48.2378 133.339 46.0474 133.996 43.6634 133.998L43.6594 134Z'
        fill='#F53737'
      />
      <path
        d='M107.112 112.009C108.206 111.944 108.642 112.731 108.977 113.568C109.886 115.848 110.76 118.141 111.646 120.431C113.021 123.983 114.381 127.538 115.769 131.085C116.409 132.716 115.672 134.055 114.131 133.981C113.276 133.939 112.745 133.49 112.456 132.733C112.065 131.707 111.66 130.684 111.28 129.654C111.047 129.02 110.634 128.761 109.917 128.777C107.998 128.816 106.077 128.812 104.158 128.777C103.396 128.764 102.987 129.055 102.75 129.748C102.406 130.752 102.008 131.74 101.583 132.714C101.115 133.786 100.103 134.244 99.1399 133.873C98.1634 133.498 97.7407 132.519 98.1634 131.414C100.428 125.497 102.709 119.585 104.996 113.675C105.351 112.757 105.819 111.913 107.114 112.007L107.112 112.009ZM107.157 119.035C107.058 119.046 106.958 119.055 106.857 119.066C106.086 121.08 105.315 123.097 104.517 125.186H109.538C108.697 123.014 107.926 121.025 107.155 119.035H107.157Z'
        fill='#F53737'
      />
      <path
        d='M88.5375 153.418C89.7091 151.489 90.7505 149.772 91.7919 148.055C92.2754 147.258 92.7155 146.414 93.2589 145.681C93.5151 145.335 94.1143 144.904 94.3085 145.034C94.6391 145.258 94.9594 145.89 94.9656 146.358C95.0152 150.498 94.9966 154.638 94.9966 158.781C94.9966 159.765 94.9945 160.749 94.9945 161.733C94.9945 162.412 94.8561 163.019 94.1701 163C93.5254 162.98 93.3229 162.436 93.325 161.725C93.3312 158.158 93.325 154.591 93.325 151.024C93.325 150.545 93.325 150.065 93.1018 149.475C92.7403 150.023 92.3642 150.562 92.0171 151.125C91.1637 152.515 90.3352 153.925 89.4777 155.31C88.8413 156.338 88.2338 156.338 87.6015 155.315C86.5622 153.632 85.5395 151.932 84.5043 150.247C84.3555 150.004 84.1695 149.79 83.7584 149.639C83.7584 150.065 83.7584 150.491 83.7584 150.916C83.7584 154.402 83.7542 157.885 83.7625 161.371C83.7625 162.163 83.6902 162.997 82.8781 162.997C82.0579 162.997 82 162.156 82 161.369C82.0083 156.449 81.9855 151.529 82.0393 146.609C82.0455 146.07 82.4628 145.536 82.6901 145C83.122 145.31 83.6819 145.507 83.965 145.952C85.4795 148.328 86.9259 150.769 88.5375 153.418Z'
        fill='#AB7B7B'
      />
      <path
        d='M6.02683 153.392C6.90447 151.832 7.68267 150.448 8.45896 149.063C9.11097 147.898 9.72857 146.696 10.4341 145.591C10.6521 145.25 11.1836 144.915 11.4399 145.035C11.7095 145.164 11.9733 145.842 11.9771 146.284C12.0096 151.422 12.0116 156.561 11.9561 161.696C11.9523 162.153 11.5431 162.926 11.2525 162.985C10.6311 163.113 10.4341 162.41 10.4341 161.667C10.4341 158.091 10.4341 154.515 10.4322 150.939C10.4322 150.499 10.4322 150.058 10.2047 149.495C9.7649 150.253 9.31939 151.005 8.88726 151.773C8.21422 152.967 7.55647 154.179 6.8777 155.371C6.3232 156.348 5.784 156.368 5.21804 155.398C4.22377 153.693 3.25818 151.958 2.27539 150.24C2.1339 149.991 1.96755 149.766 1.64823 149.278C1.61764 150.008 1.58705 150.433 1.58514 150.86C1.5794 154.27 1.58514 157.684 1.57749 161.094C1.57749 161.504 1.62338 161.963 1.49718 162.306C1.38055 162.62 1.04403 163.024 0.831788 162.997C0.558365 162.963 0.252437 162.597 0.0784399 162.269C-0.0439314 162.037 0.0134301 161.632 0.0134301 161.304C0.0134301 156.455 0.0134301 151.603 0.0172542 146.753C0.0172542 146.548 -0.0248109 146.311 0.0382868 146.144C0.191251 145.731 0.340391 145.127 0.594694 145.023C0.856645 144.917 1.35569 145.193 1.55072 145.509C2.34613 146.79 3.06124 148.152 3.80885 149.48C4.51249 150.731 5.21995 151.978 6.01919 153.392H6.02683Z'
        fill='#AB7B7B'
      />
      <path
        d='M29.7569 149.609C29.7569 150.04 29.7569 150.474 29.7569 150.905C29.7612 154.435 29.7569 157.962 29.7721 161.492C29.7742 162.254 29.6878 163.002 28.8774 163C28.0541 163 27.9979 162.217 28.0001 161.478C28.0065 156.472 27.9914 151.464 28.0368 146.458C28.0411 145.971 28.3912 145.485 28.5814 145C29.0244 145.251 29.6229 145.374 29.8844 145.778C32.3198 149.535 34.6969 153.344 37.0934 157.132C37.3657 157.561 37.6531 157.977 38.1242 158.684C38.1674 157.97 38.2128 157.556 38.2128 157.142C38.2193 153.942 38.2193 150.74 38.2193 147.54C38.2193 147.212 38.2236 146.882 38.2193 146.554C38.2128 145.808 38.2906 145.047 39.1269 145.069C39.8789 145.089 39.974 145.798 39.9697 146.508C39.961 147.944 39.9653 149.38 39.9697 150.816C39.9805 154.304 40.0237 157.792 39.9826 161.278C39.9762 161.847 39.6001 162.409 39.3949 162.973C38.913 162.64 38.282 162.433 37.9729 161.958C35.49 158.137 33.0675 154.265 30.6235 150.41C30.4268 150.099 30.2086 149.804 30.0011 149.501C29.919 149.535 29.8347 149.572 29.7526 149.607L29.7569 149.609Z'
        fill='#AB7B7B'
      />
      <path
        d='M69.9996 153.994C70.0408 158.923 67.0087 162.917 63.1611 162.999C59.2428 163.08 56.0417 159.1 56.0004 154.099C55.9591 149.033 58.9971 145.068 62.9686 145.001C66.9105 144.936 69.9544 148.83 69.9976 153.994H69.9996ZM68.3725 153.946C68.3627 150.088 65.9594 146.998 62.9646 146.993C60.0151 146.991 57.6177 150.134 57.6098 154.018C57.6019 157.856 60.1113 161.018 63.1376 160.982C66.0301 160.947 68.3823 157.787 68.3725 153.946Z'
        fill='#AB7B7B'
      />
      <path
        d='M145.562 145.003C149.214 145.053 152.05 149.073 151.999 154.123C151.948 159.16 149.024 163.064 145.353 162.999C141.887 162.939 138.943 158.807 139.001 154.085C139.066 148.818 141.861 144.95 145.562 145V145.003ZM140.531 153.828C140.469 157.771 142.622 160.903 145.464 161.004C148.113 161.097 150.385 157.977 150.456 154.145C150.527 150.31 148.311 147.046 145.6 146.993C142.785 146.938 140.593 149.895 140.531 153.828Z'
        fill='#AB7B7B'
      />
      <path
        d='M42.0138 153.924C42.0138 151.464 42.0359 149.005 42.005 146.546C41.9917 145.475 42.3849 144.961 43.37 145.002C44.6181 145.053 45.8882 144.939 47.1075 145.157C51.3927 145.93 54.2068 149.86 53.9881 154.607C53.7827 159.061 50.5069 162.598 46.2217 162.952C45.2719 163.029 44.311 162.988 43.3568 162.995C42.3981 163.003 41.9829 162.508 42.0005 161.425C42.0403 158.927 42.0138 156.427 42.0138 153.926V153.924ZM43.8317 154.018C43.8317 155.995 43.803 157.973 43.8582 159.95C43.8692 160.306 44.1917 160.904 44.4458 160.958C48.9673 161.92 53.0052 157.321 51.9913 152.417C51.28 148.976 48.6824 147.001 44.9693 146.996C44.1343 146.996 43.7875 147.227 43.8162 148.208C43.8737 150.141 43.8339 152.08 43.8317 154.018Z'
        fill='#AB7B7B'
      />
      <path
        d='M108.006 154.045C108.006 151.584 107.997 149.123 108.009 146.663C108.017 145.317 108.243 145.031 109.258 145.009C109.9 144.995 110.545 144.999 111.187 145.009C114.989 145.055 117.91 148.803 117.998 153.746C118.086 158.728 115.264 162.716 111.447 162.973C110.683 163.024 109.915 162.986 109.151 162.99C108.354 162.995 107.989 162.503 108 161.427C108.024 158.966 108.008 156.505 108.008 154.045H108.006ZM109.53 153.948H109.527C109.527 155.603 109.508 157.259 109.53 158.913C109.56 161.126 109.166 161.082 111.162 160.981C114.356 160.818 116.637 157.645 116.492 153.62C116.35 149.691 113.763 146.401 109.968 147.065C109.794 147.097 109.554 147.681 109.549 148.015C109.508 149.991 109.528 151.972 109.528 153.95L109.53 153.948Z'
        fill='#AB7B7B'
      />
      <path
        d='M14.0246 151.286C14.0246 149.699 14.0246 148.11 14.0246 146.524C14.0246 145.807 14.0344 145.025 14.8098 145.001C15.5989 144.976 15.6225 145.756 15.6245 146.475C15.6284 149.364 15.6225 152.254 15.6284 155.146C15.6363 158.532 17.4743 160.986 19.9833 160.971C22.5081 160.957 24.3303 158.51 24.3323 155.126C24.3323 152.317 24.3185 149.508 24.3244 146.7C24.3244 146.299 24.3106 145.824 24.47 145.519C24.6137 145.245 25.0663 144.944 25.2434 145.042C25.5386 145.206 25.8869 145.656 25.9243 146.027C26.0246 147.071 25.9853 148.139 25.9853 149.198C25.9853 151.354 26.0325 153.515 25.9577 155.669C25.7767 160.861 22.1696 164.069 18.1453 162.673C15.9334 161.905 14.0974 158.994 14.0207 156.048C13.9793 154.461 14.0128 152.872 14.0128 151.286H14.0226H14.0246Z'
        fill='#AB7B7B'
      />
      <path
        d='M98.6749 152.991C100.183 152.991 101.597 152.991 103.009 152.991C103.416 152.991 103.867 152.863 104.219 153.03C104.584 153.203 104.851 153.664 105.162 153.998C104.84 154.329 104.533 154.916 104.195 154.94C102.74 155.047 101.277 155.037 99.82 154.967C98.9438 154.925 98.5913 155.239 98.6586 156.333C98.7319 157.498 98.7095 158.68 98.6586 159.849C98.6199 160.738 98.8644 161.068 99.6407 161.038C101.371 160.978 103.102 161.017 104.832 161.014C105.395 161.014 105.99 161.002 106 161.939C106.01 162.815 105.476 162.99 104.887 162.992C102.648 163.002 100.407 163.002 98.1675 162.997C97.381 162.997 96.998 162.533 97 161.567C97.0122 156.513 97.0122 151.458 97.0041 146.403C97.0041 145.454 97.3321 144.99 98.1635 145C100.37 145.022 102.577 145 104.781 145.007C105.374 145.007 106.032 145.037 105.994 146.029C105.957 146.973 105.317 147.002 104.718 147.005C103.021 147.009 101.324 147.039 99.6264 146.995C98.9479 146.978 98.6341 147.191 98.6586 148.072C98.7014 149.642 98.6708 151.213 98.6708 152.994L98.6749 152.991Z'
        fill='#AB7B7B'
      />
      <path
        d='M131.844 145C133.463 145.104 134.887 145.698 136.214 146.652C136.761 147.046 137.274 147.575 136.833 148.382C136.392 149.191 135.846 148.719 135.339 148.353C131.966 145.923 127.834 147.19 126.235 151.196C125.232 153.711 125.451 156.187 126.975 158.318C128.637 160.638 130.836 161.493 133.387 160.724C134.127 160.501 134.814 160.007 135.504 159.592C136.001 159.295 136.567 159.048 136.806 159.758C136.939 160.154 136.743 161.013 136.453 161.239C133.769 163.306 130.904 163.617 128.048 161.834C125.177 160.043 123.772 157.138 124.03 153.329C124.286 149.563 126.084 147.053 129.083 145.729C129.955 145.342 130.922 145.237 131.844 145.002V145Z'
        fill='#AB7B7B'
      />
      <path
        d='M122 154.002C122 156.489 122 158.977 122 161.463C122 162.178 122.012 163.007 121.057 163C120.093 162.993 119.998 162.188 120 161.395C120.01 156.462 120.005 151.529 120.012 146.596C120.012 145.839 120.037 144.99 121.06 145C122.034 145.01 121.998 145.837 121.998 146.542C122 149.028 121.998 151.516 121.998 154.002H122Z'
        fill='#AB7B7B'
      />
      <path
        d='M104.342 139C104.592 139.313 104.877 139.495 104.98 139.86C105.051 140.109 104.92 140.696 104.788 140.989C104.495 141.637 104.177 142.283 103.807 142.756C103.603 143.017 103.273 142.931 103 143C103.037 142.564 103.022 142.076 103.123 141.701C103.298 141.053 103.527 140.444 103.77 139.875C103.909 139.55 104.12 139.333 104.342 139Z'
        fill='#AB7B7B'
      />
    </svg>
  )
}

export default ColoredLogo
