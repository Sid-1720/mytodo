"use strict";
/*
 * SonarQube JavaScript Plugin
 * Copyright (C) 2011-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// https://jira.sonarsource.com/browse/RSPEC-101
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
exports.rule = {
    create(context) {
        return {
            ClassDeclaration: (node) => checkName(node, 'class', context),
            TSInterfaceDeclaration: (node) => checkName(node, 'interface', context),
        };
    },
};
function checkName(node, declarationType, context) {
    const [{ format }] = context.options;
    if (node.id) {
        const name = node.id.name;
        if (!name.match(format)) {
            context.report({
                message: `Rename ${declarationType} "${name}" to match the regular expression ${format}.`,
                node: node.id,
            });
        }
    }
}
//# sourceMappingURL=class-name.js.map