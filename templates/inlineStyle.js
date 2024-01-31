const inlineStyleTemplate = (data) => {
  const { name, redirect, verifyLink } = data || {};

  return `
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Email Confirmation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap"
      rel="stylesheet"
    />

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 500;
      }

      a {
        text-decoration: none;
      }
    </style>
  </head>

  <body
    style="
      font-size: 16px;
      font-weight: 500;
      padding: 10px;
      width: 700px;
      background-color: #f6f6f6;
      margin: auto;
      color: #757575;
      margin: auto;
    "
  >
    <main
      style="
        margin: auto;
        border-radius: 10px;
        background: white;
        box-shadow: 0px 45px 250px 0px rgba(17, 33, 39, 0.1),
          0px -4px 150px 0px rgba(35, 56, 65, 0.05);
      "
    >
      <!-- temp header  -->
      <div
        style="
          background-image: url('https://res.cloudinary.com/djx9awdb7/image/upload/v1706535666/arnifi/rounded_usfin0.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 10px 10px 0 0;
          height: 200px;
        "
      >
        <div
          style="
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.28) 0.21%,
              rgba(0, 0, 0, 0) 99.83%
            );
            border-radius: 10px 10px 0 0;
            height: 100%;
            width: 100%;
            padding: 40px;
          "
        >
          <img
            src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552240/arnifi/arnifi_logo_s2znae.png"
            alt="Arnifi"
          />

          <h2
            style="
              color: white;
              font-size: 28px;
              font-weight: 600;
              padding-top: 16px;
            "
          >
            Welcome to Arnifi, <br />
            E-mail confirmed!
          </h2>
        </div>
      </div>
      <!-- temp body -->
      <div style="padding: 40px; background-color: white">
        <h3 style="color: black; font-weight: 600; text-transform: capitalize">
          hi ${name},
        </h3>
        <p>Thank you for Signing up! Your email address has been verified.</p>

        <div style="padding: 10px 0">
          <p>
            You can access your account area to view your orders and change your
            account settings here:
            <a
              style="color: #1482ff; font-weight: 600"
              href="http://arnifi.com/my-account"
              target="_blank"
            >
              http://arnifi.com/my-account.
            </a>
          </p>

          <p style="padding: 5px 0">
            Your Application is saved in your dashboard. There is only a step
            left, we need to verify your email.
          </p>

          <a href="" style="color: black">
            Just click below on the button for verifying your email and getting
            joined with us.
          </a>

          <p style="padding: 10px 0">
            Thank you, <br />
            Team Arnifi
          </p>

          <button
            style="
              margin: 10px 0;
              padding: 14px 34px;
              background: #3955d9;
              border-radius: 5px;
              color: white;
              border: none;
              cursor: pointer;
            "
          >
            <a href="" style="color: white">Call to action</a>
          </button>
        </div>

        <!-- social link  -->
        <div
          style="
            display: flex;
            justify-content: start;
            align-items: center;
            padding-top: 1rem;
          "
        >
          <a href="" style="margin-right: 10px">
            <img
              src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/facebook_w6ommx.png"
              alt="facebook"
            />
          </a>
          <a href="" style="margin-right: 10px">
            <img
              src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/Instagram_jhu2yz.png"
              alt="instagram"
            />
          </a>
          <a href="" style="margin-right: 10px">
            <img
              src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/twitter_gdcact.png"
              alt="twitter"
            />
          </a>
          <a href="" style="margin-right: 10px">
            <img
              src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/linkedIn_epkggv.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>

      <!-- temp footer  -->
      <div
        style="
          background-color: #3955d9;
          padding: 40px;
          border-radius: 0 0 10px 10px;
          color: white;
        "
      >
        <p style="color: white">
          You're receiving this email because you are a subscriber of Arnifi
        </p>
        <p style="color: white">
          If you feel you received it by mistake or wish to unsubscribe,<a
            href=""
            style="font-weight: 600; color: white"
          >
            click here.</a
          >
        </p>
      </div>
    </main>
  </body>
</html>

      `;
};

module.exports = {
  inlineStyleTemplate,
};
