/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

import Meta from "gi://Meta";
import Shell from "gi://Shell";
import * as Main from "resource:///org/gnome/shell/ui/main.js";

export default class MarbleExtension extends Extension {
  enable() {
    this._settings = this.getSettings();

    this._keyFocusLeftId = "focus-left";
    this._keyFocusDownId = "focus-down";
    this._keyFocusUpId = "focus-up";
    this._keyFocusRightId = "focus-right";

    Main.wm.addKeybinding(
      this._keyFocusLeftId,
      this._settings,
      Meta.KeyBindingFlags.NONE,
      Shell.ActionMode.ALL,
      () => console.log(this._keyFocusLeftId),
    );

    Main.wm.addKeybinding(
      this._keyFocusDownId,
      this._settings,
      Meta.KeyBindingFlags.NONE,
      Shell.ActionMode.ALL,
      () => console.log(this._keyFocusDownId),
    );

    Main.wm.addKeybinding(
      this._keyFocusUpId,
      this._settings,
      Meta.KeyBindingFlags.NONE,
      Shell.ActionMode.ALL,
      () => console.log(this._keyFocusUpId),
    );

    Main.wm.addKeybinding(
      this._keyFocusRightId,
      this._settings,
      Meta.KeyBindingFlags.NONE,
      Shell.ActionMode.ALL,
      () => console.log(this._keyFocusRightId),
    );
  }

  disable() {}
}
