// src/pages/Week01/ButtonPage.tsx

import React from 'react'
import Button from '../../components/Button'

const ButtonPage: React.FC = () => {
    return (
        <div className="p-4 space-y-12">
            <h2 className="text-3xl font-bold">Button 컴포넌트 예시</h2>

            {/* 1. size prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    size: 버튼의 크기를 지정합니다. (예: "small", "medium", "large")
                </p>
                <div className="space-y-2">
                    <div>
                        <p>size - small</p>
                        <Button size="small" variant="contained" color="primary">
                            Small Button
                        </Button>
                    </div>
                    <div>
                        <p>size - medium</p>
                        <Button size="medium" variant="contained" color="primary">
                            Medium Button
                        </Button>
                    </div>
                    <div>
                        <p>size - large</p>
                        <Button size="large" variant="contained" color="primary">
                            Large Button
                        </Button>
                    </div>
                </div>
            </div>

            {/* 2. variant prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    variant: 버튼의 스타일 변형을 지정합니다. (예: "text", "outlined", "contained")
                </p>
                <div className="space-y-2">
                    <div>
                        <p>variant - text</p>
                        <Button variant="text" color="primary">
                            Text Button
                        </Button>
                    </div>
                    <div>
                        <p>variant - outlined</p>
                        <Button variant="outlined" color="primary">
                            Outlined Button
                        </Button>
                    </div>
                    <div>
                        <p>variant - contained</p>
                        <Button variant="contained" color="primary">
                            Contained Button
                        </Button>
                    </div>
                </div>
            </div>

            {/* 3. color prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    color: 버튼의 색상을 지정합니다. (예: "default", "primary", "secondary",
                    "error", "success", "info", "warning")
                </p>
                <div className="space-y-2">
                    {['default', 'primary', 'secondary', 'error', 'success', 'info', 'warning'].map(
                        (clr) => (
                            <div key={clr}>
                                <p>color - {clr}</p>
                                <Button variant="contained" color={clr as any}>
                                    {clr.charAt(0).toUpperCase() + clr.slice(1)} Button
                                </Button>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* 4. disabled prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">disabled: 버튼을 비활성화 상태로 설정합니다.</p>
                <div className="space-y-2">
                    <div>
                        <p>disabled - true</p>
                        <Button disabled variant="contained" color="warning">
                            Disabled Button
                        </Button>
                    </div>
                </div>
            </div>

            {/* 5. startIcon 및 endIcon prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    startIcon / endIcon: 버튼 텍스트 왼쪽/오른쪽에 아이콘을 표시합니다.
                </p>
                <div className="space-y-2">
                    <div>
                        <p>startIcon 예시</p>
                        <Button variant="contained" color="primary" startIcon={<span>🚀</span>}>
                            StartIcon Button
                        </Button>
                    </div>
                    <div>
                        <p>endIcon 예시</p>
                        <Button variant="contained" color="primary" endIcon={<span>👉</span>}>
                            EndIcon Button
                        </Button>
                    </div>
                </div>
            </div>

            {/* 6. loading 및 loadingPosition prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    loading: 버튼이 로딩 중인 상태이면 비활성화되고, loadingPosition에 따라 스피너가
                    표시됩니다.
                </p>
                <div className="space-y-2">
                    <div>
                        <p>loading (center)</p>
                        <Button
                            loading
                            loadingPosition="center"
                            variant="contained"
                            color="success"
                        >
                            Loading
                        </Button>
                    </div>
                    <div>
                        <p>loadingPosition - start</p>
                        <Button loading loadingPosition="start" variant="contained" color="success">
                            Loading Start
                        </Button>
                    </div>
                    <div>
                        <p>loadingPosition - end</p>
                        <Button loading loadingPosition="end" variant="contained" color="success">
                            Loading End
                        </Button>
                    </div>
                </div>
            </div>

            {/* 7. fullWidth prop 예시 */}
            <div className="space-y-4">
                <p className="font-bold">
                    fullWidth: 버튼이 부모 컨테이너의 가로 너비를 모두 차지하도록 설정합니다.
                </p>
                <div className="space-y-2">
                    <div>
                        <p>fullWidth - true</p>
                        <Button fullWidth variant="contained" color="primary">
                            Full Width Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonPage
