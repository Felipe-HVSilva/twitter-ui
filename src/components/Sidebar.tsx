import twitterLogo from "../assets/logo-twitter.svg"
import * as Switch from "@radix-ui/react-switch"

import "./Sidebar.css"

import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from "phosphor-react"

import { NavLink } from "react-router-dom"
import { useTheme } from "../hooks/useTheme"

export function Sidebar() {
  const { theme, handleTheme } = useTheme()
  return (
    <aside className={`sidebar ${theme}`}>
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="#">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="#">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="#">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="#">
          <FileText />
          <span>List</span>
        </a>
        <a href="#">
          <User />
          <span>Profile</span>
        </a>
        <a href="#">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>

      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className="Label"
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          Switch Theme
        </label>
        <Switch.Root
          className="SwitchRoot"
          id="airplane-mode"
          onClick={handleTheme}
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </aside>
  )
}
