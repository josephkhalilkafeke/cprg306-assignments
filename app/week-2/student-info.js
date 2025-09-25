import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Joseph Khalil Kafeke</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/josephkhalilkafeke/cprg306-assignments">
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}
