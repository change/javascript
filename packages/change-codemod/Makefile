run-codemod:
	npx jscodeshift -t $(transform) --extensions=js,jsx --ignore-config=$(path)/.gitignore --printOptions='{"trailingComma": "true"}' $(path)

lodash-to-object-spread:
	make run-codemod transform=transforms/lodash-to-object-assign.js path=$(path)
	make run-codemod transform=node_modules/js-codemod/transforms/rm-object-assign.js path=$(path)
	@echo "Done! Enable the change/prefer-object-spread-to-lodash rule to enforce this change."