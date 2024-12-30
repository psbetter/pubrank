module.exports = {
    types: [
      { type: "feat", section: "✨ Features | 新功能" },
      { type: "fix", section: "🐛 Bug Fixes | 修复 Bug" },
      { type: "docs", section: "📝 Documentation | 文件变更" },
      { type: "style", section: "🎨 Styles | 代码格式" },
      { type: "refactor", section: "♻️ Code Refactoring | 代码重构" },
      {
        type: "perf",
        section: "⚡ Performance Improvements | 提升代码性能",
      },
      { type: "test", section: "✅ Tests | 添加或修正测试" },
      { type: "revert", section: "⏪ Revert | 回退先前的提交" },
      {
        type: "build",
        section: "📦 Build System | 影响构建系統或外部依赖的变更",
      },
      {
        type: "chore",
        section: "🔧 chore | 其他不修改 src 或测试文件的变更",
      },
      {
        type: "ci",
        section: "👷 Continuous Integration | CI 配置",
      },
    ],
    skip: {
      bump: true,
      changelog: false,
      commit: true,
      tag: true,
    },
  };