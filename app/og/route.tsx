import { ImageResponse } from "next/server"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  const font = fetch(
    new URL("../../public/fonts/Montserrat-Regular.ttf", import.meta.url)
  ).then(res => res.arrayBuffer())
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://janez.tech/og-bg.jpeg)",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Montserrat",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "black",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Montserrat",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
