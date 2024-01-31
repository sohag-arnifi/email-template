const emailConfirmationTemplate = (data) => {
  const { name, redirect, verifyLink } = data || {};

  const socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/",
      img: "https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/facebook_w6ommx.png",
    },
    {
      name: "instagram",
      link: "https://twitter.com/",
      img: "https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/Instagram_jhu2yz.png",
    },
    {
      name: "twitter",
      link: "https://twitter.com/",
      img: "https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/twitter_gdcact.png",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/",
      img: "https://res.cloudinary.com/djx9awdb7/image/upload/v1706552452/arnifi/linkedIn_epkggv.png",
    },
  ];

  const tempBody = (name) => {
    return `
    <div class="temp-body">
    <h3 style="color: black; font-weight: 600; text-transform: capitalize">
      hi ${name},
    </h3>
    <p>Thank you for Signing up! Your email address has been verified.</p>

    <div style="padding: 16px 0">
      <p>
        You can access your account area to view your orders and change your
        account settings here:
        <a
          style="color: #1482ff; font-weight: 600"
          href="${redirect}"
          target="_blank"
        >
          http://arnifi.com/my-account.
        </a>
      </p>

      <p style="padding: 8px 0">
        Your Application is saved in your dashboard. There is only a step
        left, we need to verify your email.
      </p>

      <a href="${verifyLink}" style="color: black">
        Just click below on the button for verifying your email and getting
        joined with us.
      </a>

      <p style="padding: 16px 0">
        Thank you, <br />
        Team Arnifi
      </p>

      <button class="action-btn">
        <a href="${verifyLink}" style="color: white">Call to action</a>
      </button>
    </div>

    <!-- social link  -->
    <div class="social-links">

    ${socialLinks
      .map((link) => {
        return `<a href="${link.link}"><img src="${link.img}" alt="${link.name}"/></a>`;
      })
      .join("")}
    </div>
  </div>
    `;
  };

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

        #main-container {
            font-size: 16px;
            font-weight: 500;
            padding: 40px;
            width: 700px;
            background-color: #f6f6f6;
            margin: auto;
            color: #757575;
            margin: auto;
        }

        .container {
            margin: auto;
            background: white;
            box-shadow: 0px 45px 250px 0px rgba(17, 33, 39, 0.1),
            0px -4px 150px 0px rgba(35, 56, 65, 0.05);
        }

        .temp-header {
            background-image: url("https://res.cloudinary.com/djx9awdb7/image/upload/v1706535666/arnifi/rounded_usfin0.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 10px 10px 0 0;
            height: 200px;
        }

        .temp-header > .background {
            background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.28) 0.21%,
            rgba(0, 0, 0, 0) 99.83%
            );
            border-radius: 10px 10px 0 0;
            height: 100%;
            width: 100%;
            padding: 40px;
        }

        .temp-header > .background > h2 {
            color: white;
            font-size: 28px;
            font-weight: 600;
            padding-top: 16px;
        }

        .temp-body {
            padding: 40px;
            background-color: white;
        }

        .action-btn {
            margin: 10px 0;
            padding: 14px 34px;
            background: #3955d9;
            border-radius: 5px;
            color: white;
            border: none;
            cursor: pointer;
        }

        .action-btn > a {
            font-weight: 600;
            font-size: 1rem;
        }

        .social-links {
            display: flex;
            justify-content: start;
            align-items: center;
            padding-top: 1rem;
        }

        .social-links > a {
            margin-right: 10px;
        }

        .temp-footer {
            background-color: #3955d9;
            padding: 40px;
            border-radius: 0 0 10px 10px;
            color: white;
        }

        @media only screen and (max-width: 600px) {
            #main-container {
            padding: 10px;
            }

            .temp-footer {
            text-align: center;
            }

            
        }
        </style>
    </head>
    <body id="main-container">
        <main class="container">
        <!-- temp header  -->
        <div class="temp-header">
            <div class="background">
            <img
                src="https://res.cloudinary.com/djx9awdb7/image/upload/v1706552240/arnifi/arnifi_logo_s2znae.png"
                alt="Arnifi"
            />

            <h2>
                Welcome to Arnifi, <br />
                E-mail confirmed!
            </h2>
            </div>
        </div>


        <!-- temp body -->
        ${tempBody(name)}

        <!-- temp footer  -->
        <div class="temp-footer">
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
  emailConfirmationTemplate,
};