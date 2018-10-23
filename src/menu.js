import React from 'react'
import {
  MapIcon,
  BallotIcon,
  CheckIcon,
  ClockIcon,
  AirplaneIcon,
  QuestionIcon
} from './icons'

const items = [
  {
    id: 'register',
    icon: CheckIcon,
    href: 'https://www.vote.org/register-to-vote/',
    title: 'Register to vote',
    description: 'It takes less than 2 minutes to register.'
  },
  {
    id: 'check',
    icon: QuestionIcon,
    href: 'https://www.vote.org/am-i-registered-to-vote/',
    title: 'Check your registration',
    description:
      'Not sure if you’re registered to vote? We’ll help you check and register if you can.'
  },
  {
    id: 'polls',
    icon: MapIcon,
    href: 'https://vote.org/polling-place-locator',
    title: 'Find your polling place',
    description:
      'We’ll look up where is your nearest polling place, so you know where to go on Election Day.'
  },
  {
    id: 'ballot',
    icon: BallotIcon,
    href: 'https://vote.org/preview-your-ballot',
    title: 'Preview your ballot',
    description:
      'We’ll show you who & what will be on your local ballot, and you can save how you plan to vote.'
  },
  {
    id: 'reminders',
    icon: ClockIcon,
    href: 'https://www.vote.org/election-reminders/',
    title: 'Get election reminders',
    description:
      'We’ll remind you when and what you need to vote, so that you never miss an election again.'
  },
  {
    id: 'absentee',
    icon: AirplaneIcon,
    href: 'https://www.vote.org/absentee-ballot/',
    title: 'Get your absentee ballot',
    description:
      'Can’t vote in person on Election Day? Request an absentee ballot.'
  }
].filter(item => {
  if (!item.href) {
    console.warn('menu item missing href: ' + item.title)
  }

  return Boolean(item.href)
})

function getOrderedItems({ items = [], order = [], hide = [] }) {
  // ['polls', 'ballot'] will render ballot first because
  // it has a larger index value
  const menuOrder = order.reverse()
  // Check if the item should be hidden
  const filteredItems = items.filter(i => hide.indexOf(i.id) === -1)

  // Re-order the remaining items based on defined order
  return filteredItems.sort((a, b) => {
    const orderIndexA = menuOrder.indexOf(a.id)
    const orderIndexB = menuOrder.indexOf(b.id)

    return orderIndexB - orderIndexA
  })
}

export function Menu({ order, hide }) {
  const orderedItems = getOrderedItems({ items, order, hide })

  return (
    <div className="menu-container">
      <div className="menu">
        {orderedItems.map(({ icon: Icon, href, title, description }, index) => (
          <a key={index} className="menu-item" href={href}>
            <div className="menu-item-left">
              <Icon className="menu-item-icon" />
            </div>
            <div className="menu-item-right">
              <div className="menu-item-title">{title} &rarr;</div>
              <div className="menu-item-description">{description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const minify = str =>
  unescape(
    escape(str)
      .replace(/\\n/g, '')
      .replace(/\s{2,}/g, '')
  )

const css = `
/**
 * Menu.
 */
.menu-container {
  width: 95%;
  max-width: 600px;
  margin: 20px auto;
}

.menu {
  text-align: left;
  font-family: SF UI Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.menu-item,
.menu-item:visited {
  padding: 26px 30px;
  margin-bottom: 12px;
  background: white;
  color: #69778b;
  text-decoration: none;
  user-select: none;
  box-shadow: rgba(67, 90, 111, 0.416) 0px 0px 1px, rgba(67, 90, 111, 0.3) 0px 2px 4px -2px;
  border-radius: 4px;
  overflow: hidden;
  transition: background .2s ease-out;
}

@media(max-width: 767px) {
  .menu-item {
    padding: 18px 15px;
  }
}

.menu-item:hover {
  background: #f9f9fa;
}

.menu-item:active {
  background: #f2f3f5;
}

/*
.menu-item + .menu-item {
  border-top: 1px solid rgba(67, 90, 111, 0.125);
} */

.menu-item {
  display: block;
}

.menu-item-left {
  display: table-cell;
  width: 86px;
  vertical-align: middle;
}

.menu-item-icon {
  display: inline-block;
  width: 60px;
  height: 60px;
}

@media screen and (max-width: 30em) {
  .menu-item-left {
    width: 50px;
  }

  .menu-item-icon {
    width: 32px;
    height: 32px;
  }
}

.menu-item-right {
  display: table-cell;
}

.menu-item-title {
  display: inline-block;
  margin-bottom: 4px;
  padding: 3px 6px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background: #1F75E7;
  border-radius: 2px;
  text-transform: uppercase;
}
.menu-item-description {
  font-size: 15px;
}
@media (max-width: 330px) {
  .menu-item-title {
    font-size: 12px;
  }
  .menu-item-description {
    font-size: 12px;
  }
}`
const styles = { __html: minify(css) }

export function MenuStyles() {
  return <style dangerouslySetInnerHTML={styles} />
}

Menu.Styles = MenuStyles

export default Menu
