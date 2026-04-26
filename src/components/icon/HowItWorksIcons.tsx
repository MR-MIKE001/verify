function HowItWorksIcons({ icon }: { icon: string }) {
  switch (icon) {
    case "register":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2952E3"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0110.631 21c-2.676 0-5.216-.584-7.13-1.882z"
          />
        </svg>
      );

    case "profile":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2952E3"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );

    case "project":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2952E3"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .375a23.952 23.952 0 005.712-.393m-5.712.393c-.837 0-1.668-.078-2.485-.23M9 18a23.933 23.933 0 00-8.712 1.507m8.712-1.507c.837 0 1.668-.078 2.485-.23m0 0a23.936 23.936 0 012.485-.23m-2.485.23c-.837 0-1.668-.078-2.485-.23M15 12h3.75M15 15h3.75M15 18h3.75"
          />
        </svg>
      );

    default:
      return <div>Default Icon</div>;
  }
}

export default HowItWorksIcons;